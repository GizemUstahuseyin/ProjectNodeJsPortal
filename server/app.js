const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const moment = require('moment');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({   
    host: "localhost",
    user: "root",
    password: "",
    database: "erasmusportal"
});

connection.connect((err) => {
    if (err) {
        console.error('Veritabanına bağlanırken hata oluştu: ', err);
        return;
    }
    console.log('Veritabanına bağlanıldı.');
});


app.post('/kayit', (req, res) => {

    const { email, password } = req.body;

    const query = "INSERT INTO users (username,password,AccountOpeningDate) VALUES (?,?,NOW())";
    connection.query(query, [email, password], (err, result) => {
        

        if (err) {
            console.error("Veritabanina bilgi girereken hata: ", err);
            res.status(500).send({ error: "Kayıt oluşturulurken bir hata oluştu." });
            return;
        }
        res.status(200).send({ message: "Kayıt Başarılı!" });

    })

});

app.post('/', (req, res) => {

    const { email, password } = req.body;

    const query = "SELECT * FROM users WHERE username=? AND password=?";

    connection.query(query, [email, password], (err, result) => {
        if (err) {
            console.error("Bilgilerin kontrolünde bir hata oluştu. ", err);
            res.status(500).send({ error: 'Bilgilerin kontrolünde bir hata oluştu.' });
            return;
        }
        if (result.length > 0) {

            const user_id = result[0].id_num;

            const isLoginQuery = "UPDATE users SET isLogin = 1 WHERE id_num=?";

            connection.query(isLoginQuery, user_id, (err, result) => {
                if (err) {
                    console.error("Login bilgisi güncellenirken bir hata oluştu. ", err);
                    res.status(500).send({ error: 'Login güncellenemedi.' });
                }
            });

            res.status(200).send({ message: '1', id: user_id });
        } else {
            res.status(200).send({ message: '0' });
        }


    })


});

app.post('/signout', (req, res) => {

    const { id } = req.body;

    const query = "UPDATE users SET isLogin = 0 WHERE id_num=?";

    connection.query(query, [id], (err, result) => {
        if (err) {
            console.error("isLogin güncellemesinde hata oluştu. ", err);
            res.status(500).send({ error: 'isLogin güncellemesinde hata oluştu.' });
            return;
        }

        res.status(200).send({ message: 'Kullanıcı çıkışı güncellendi.' });
    });

});

app.post('/BasvuruFormuGonder', (req,res) => {

    const {id,soyisim,isim,cinsiyet,tarih,telefon,tcNo,ulke,milliyet,ikinciMilliyet,il,ilce,mahalle,sokak,apartno,zip,why,disability,universite,fakulte,bolum,mezuniyet,mezuniyetTarih,not,cv,niyet,diploma,ingYetkin,ikametgah,pasaport} = req.body;

    const kontrolQuery ="SELECT * FROM usertable WHERE UserID =?";

    connection.query(kontrolQuery, [id], (err,result) => {

        if(result.length > 0){
            res.status(201).send({error: "Aynı hesaptan yalnızca bir (1) kullanıcı başvuru yapabilir!"});
            return;
        }else{
 
            const query1 = "INSERT INTO usertable (`UserID`,`LastName`,`FirstName`,`Gender`,`BirthDate`,`PhoneNumber`) VALUES (?,?,?,?,?,?)";
            const query2 = "INSERT INTO nationalitytable (`UserID`,`IdNumber`,`Country`,`NationalityName`,`SecondNationalityName`) VALUES (?,?,?,?,?)"; 
            const query3 = "INSERT INTO addresstable (`UserID`,`City`,`District`,`Neighborhood`,`Street`,`ApartmentNumber`,`PostCode`) VALUES (?,?,?,?,?,?,?)";
            const query4 = "INSERT INTO disabilitytable (`UserID`,`DisabilityStatus`,`DisabilityName`) VALUES (?,?,?)";
            const query5 = "INSERT INTO educationtable (`UserID`,`UnivercityName`,`FacultyName`,`DepartmentName`,`GraduationStatus`,`GraduationDate`,`GradeAverage`) VALUES (?,?,?,?,?,?,?)";
            const query6 = "INSERT INTO userdocumenttable (`UserID`,`Cv`,`LetterOfIntent`,`Diploma`,`EnglishCertificateOfCompetence`,`PlaceOfResidence`,`Passport`,`DocumentUploadDate`) VALUES (?,?,?,?,?,?,?,?)";
            const query7 = "INSERT INTO applicationtable (`UserID`,`ApplicationDate`,`ApplicationStatus`) VALUES (?,?,?)";
          
            const now = moment();
            const formattedDate = now.format('YYYY-MM-DD');
            
            let numQueriesCompleted = 0;

            connection.query(query1, [id,soyisim,isim,cinsiyet,tarih,telefon], handleQueryCompletion);
            connection.query(query2, [id,tcNo,ulke,milliyet,ikinciMilliyet], handleQueryCompletion);
            connection.query(query3, [id,il,ilce,mahalle,sokak,apartno,zip], handleQueryCompletion);
            connection.query(query4, [id,why,disability], handleQueryCompletion);
            connection.query(query5, [id,universite,fakulte,bolum,mezuniyet,mezuniyetTarih,not], handleQueryCompletion);
            connection.query(query6, [id,cv,niyet,diploma,ingYetkin,ikametgah,pasaport, formattedDate], handleQueryCompletion);
            connection.query(query7, [id, formattedDate, "Başvuru Durumu Devam Ediyor"], handleQueryCompletion);

            function handleQueryCompletion(err, result) {
              numQueriesCompleted++;
            
              if (err) {
                console.error("Veritabanina bilgi girereken hata: ", err);
                res.status(500).send({ error: "Kayıt oluşturulurken bir hata oluştu" });
                return;
              }
            
              if (numQueriesCompleted === 5) {
                res.status(200).send({ message: "Kayıt başarılı!" });
              }
            }
            
          
        }              
    
    })
});

app.post("/formGoster", (req, res) => {

    const user_id = req.body.id;
  
    const query1 = "SELECT * FROM usertable WHERE UserID=?";
    const query2 = "SELECT * FROM nationalitytable WHERE UserID=?";
    const query3 = "SELECT * FROM addresstable WHERE UserID=?";
    const query4 = "SELECT * FROM disabilitytable WHERE UserID=?";
    const query5 = "SELECT * FROM educationtable WHERE UserID=?";
    const query6 = "SELECT * FROM userdocumenttable WHERE UserID=?";
    const query7 = "SELECT * FROM users WHERE id_num=?";
  
    Promise.all([
      new Promise((resolve, reject) => {
        connection.query(query1, [user_id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }),
      new Promise((resolve, reject) => {
        connection.query(query2, [user_id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }),
      new Promise((resolve, reject) => {
        connection.query(query3, [user_id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }),
      new Promise((resolve ,reject) => {
        connection.query(query4, [user_id], (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
      }),
      new Promise((resolve,reject) => {
        connection.query(query5, [user_id], (err ,result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
      }),
      new Promise((resolve,reject) => {
        connection.query(query6, [user_id], (err, result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
      }),
      new Promise((resolve,reject) => {
        connection.query(query7, [user_id], (err, result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
      })

    ]).then((results) => {
      const userResult = results[0];
      const nationalityResult = results[1];
      const addressResult = results[2];
      const disabilityResult = results[3];
      const educationResult = results[4];
      const userdocumentResult = results[5];
      const usersResult = results[6];
      if (userResult.length === 0) {
        res.status(404).send({ message: "Başvuru Bulunamadı." });
      } else {
        const responseData = {

          isim: userResult[0].FirstName,
          soyisim: userResult[0].LastName,
          cinsiyet: userResult[0].Gender,
          tarih: userResult[0].BirthDate.toLocaleDateString("tr-TR"),
          telefon: userResult[0].PhoneNumber,
          tcNo: nationalityResult[0].IdNumber,
          ulke: nationalityResult[0].Country,
          milliyet: nationalityResult[0].NationalityName,
          ikinciMilliyet: nationalityResult[0].SecondNationalityName,
          il: addressResult[0].City,
          ilce: addressResult[0].District,
          mahalle: addressResult[0].Neighborhood,
          Street: addressResult[0].Street,
          apartNo: addressResult[0].ApartmentNumber,
          zip: addressResult[0].PostCode,
          disability:disabilityResult[0].DisabilityName,
          why : disabilityResult[0].DisabilityStatus,
          universite : educationResult[0].UnivercityName,
          fakulte : educationResult[0].FacultyName,
          bolum : educationResult[0].DepartmentName,
          mezuniyet : educationResult[0].GraduationStatus,
          mezuniyetTarih : educationResult[0].GraduationDate.toLocaleDateString("tr-TR"),
          not : educationResult[0].GradeAverage,
          cv : userdocumentResult[0].Cv,
          diploma : userdocumentResult[0].Diploma,
          niyet : userdocumentResult[0].LetterOfIntent,
          ingYetkin : userdocumentResult[0].EnglishCertificateOfCompetence,
          ikametgah : userdocumentResult[0].PlaceOfResidence,
          pasaport : userdocumentResult[0].Passport,
          email : usersResult[0].username

        };
        res.status(200).send(responseData);
      }
    }).catch((err) => {
      console.error("Veritabanından bilgi alınırken bir hata oluştu.", err);
      res.status(500).send({ error: "Veritabanından bilgi alınırken bir hata oluştu." });
    });
  });


app.post('/portal/password', (req, res) => {
  const { email, password, passnew, passnewtekrar } = req.body;

  if (passnew !== passnewtekrar) {
    res.status(400).send({ error: "Yeni şifre ve tekrarı eşleşmiyor." });
    return;
  }

  const query = "SELECT * FROM users WHERE username=? AND password=?";

  connection.query(query, [email, password], (err, result) => {
    if (err) {
      console.error("Bilgilerin kontrolunde hata oluştu. ", err);
      res.status(500).send({ error: 'Bilgilerin kontrolünde hata oluştu.' });
      return;
    }

    if (result.length === 0) {
      res.status(401).send({ error: "Mevcut şifreniz yanlış." });
      return;
    }

    const updatePasswordQuery = "UPDATE users SET password = ? WHERE username = ?";
    connection.query(updatePasswordQuery, [passnew, email], (err, result) => {
      if (err) {
        console.error("Veritabanına şifre güncellenirken hata oluştu: ", err);
        res.status(500).send({ error: "Şifre güncellenirken bir hata oluştu." });
        return;
      }

      res.status(200).send({ success: "Şifreniz başarıyla güncellendi." });
    });
  });
});


var nodemailer = require('nodemailer');

  app.post('/submit-form', (req, res) => {
    var gonderenEmail = req.body.email;
    var mesaj = req.body.mesaj;
    var name = req.body.name;
  
    const user_id = req.body.id;
    const query1 = "SELECT * FROM users WHERE id_num=?";
  
    connection.query(query1, [user_id], (err, result) => {
      console.log(user_id);
      if (err) {
        console.error(err);
        res.status(500).send({ message: "Bir şeyler yanlış gitti!" });
      }
      else {
        if (result && result.length > 0 && result[0].username && result[0].password){ 
            var hotmailTransporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
              user: result[0].username,
              pass: result[0].password
            }
          });
          
          var outlookTransporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
              user: result[0].username,
              pass: result[0].password
            }
          });

  
          var mailOption = {
            from: gonderenEmail,
            to: 'atikedilan@hotmail.com',
            cc:'gizemustahuseyin123@gmail.com',
            subject: "Erasmus Portal'dan Mesaj",
            text: "Gönderen: " + name + " Mesaj: " + mesaj
          };
  
          hotmailTransporter.sendMail(mailOption, function(err, info) {
            if (err) {
              console.error(err);
              res.status(500).send({ message: "Mesaj gönderilemedi!" });
            } else {
              console.log("Mail gönderildi" + info.messageId);
              res.status(200).send({ message: "1", id: info.messageId });
            }
          });

          outlookTransporter.sendMail(mailOption, function(err, info) {
            if (err) {
              console.error(err);
              res.status(500).send({ message: "Mesaj gönderilemedi!" });
            } else {
              console.log("Mail gönderildi" + info.messageId);
              res.status(200).send({ message: "1", id: info.messageId });
            }
          });

        } 
        else {
          res.status(500).send({ message: "Kullanıcı bulunamadı!" });
        }
      }
    });
  });

app.post('/guncelle', (req, res) => {
  const {id,soyisim,isim,cinsiyet,tarih,telefon,tcNo,ulke,milliyet,ikinciMilliyet,il,ilce,mahalle,sokak,apartno,zip,why,disability,universite,fakulte,bolum,mezuniyet,mezuniyetTarih,not,cv,niyet,diploma,ingYetkin,ikametgah,pasaport} = req.body;

  const kontrolQuery ="SELECT * FROM usertable WHERE UserID =?";
  connection.query(kontrolQuery, [id], (err,result) => {
     
          const updateQuery1 = "UPDATE usertable SET LastName=?, FirstName=?, Gender=?, BirthDate=?, PhoneNumber=? WHERE UserID=?";
          const updateQuery2 = "UPDATE nationalitytable SET IdNumber=?, Country=?, NationalityName=?, SecondNationalityName=? WHERE UserID=?";
          const updateQuery3 = "UPDATE addresstable SET City=?, District=?, Neighborhood=?, Street=?, ApartmentNumber=?, PostCode=? WHERE UserID=?";
          const updateQuery4 = "UPDATE disabilitytable SET DisabilityStatus=?, DisabilityName=? WHERE UserID=?";
          const updateQuery5 = "UPDATE educationtable SET UnivercityName=?, FacultyName=?, DepartmentName=?, GraduationStatus=?, GraduationDate=?, GradeAverage=? WHERE UserID=?";
          const updateQuery6 = "UPDATE userdocumenttable SET Cv=?, LetterOfIntent=?, Diploma=?, EnglishCertificateOfCompetence=?, PlaceOfResidence=?, Passport=?, DocumentUploadDate=? WHERE UserID=?";
          const updateQuery7 = "UPDATE applicationtable SET ApplicationDate=?, ApplicationStatus=? WHERE UserID=?";

          const now = moment();
          const formattedDate = now.format('YYYY-MM-DD');

          let numQueriesCompleted = 0;

          connection.query(updateQuery1, [soyisim,isim,cinsiyet,tarih,telefon, id], handleQueryCompletion);
          connection.query(updateQuery2, [tcNo,ulke,milliyet,ikinciMilliyet, id], handleQueryCompletion);
          connection.query(updateQuery3, [il,ilce,mahalle,sokak,apartno,zip, id], handleQueryCompletion);
          connection.query(updateQuery4, [why,disability, id], handleQueryCompletion);
          connection.query(updateQuery5, [universite,fakulte,bolum,mezuniyet,mezuniyetTarih,not, id], handleQueryCompletion);
          connection.query(updateQuery6, [cv,niyet,diploma,ingYetkin,ikametgah,pasaport, formattedDate, id], handleQueryCompletion);
          connection.query(updateQuery7, [formattedDate, "Başvuru Durumu Devam Ediyor", id], handleQueryCompletion);

          function handleQueryCompletion(err, result) {
            numQueriesCompleted++;
          
            if (err) {
              console.error("Veritabaninda bilgi güncellenirken hata: ", err);
              res.status(500).send({ error: "Güncellenirken bir hata olustu." });
              return;
            }
          
            if (numQueriesCompleted === 7) {
              res.status(200).send({ message: "Güncelleme başarılı!" });
            }
          }
      
    })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server ${PORT} üzerinde dinleniyor.`);
});