var mysql = require('mysql');

var con = mysql.createConnection(
    {
        host: 'localhost', //buraya serverin idsi yazılır
        user: 'root',
        password: '',
        database: 'ErasmusPortal'
    }
);

con.connect(function (err){
    if(err) throw err;

    console.log("Bağlandi!");

    var sql = 
     "CREATE TABLE ApplicationTable (UserID INT , ApplicationDate DATE, ApplicationStatus NVARCHAR(50))";
     "CREATE TABLE UserTable(UserID INT NOT NULL AUTO_INCREMENT, LastName nvarchar(30),FirstName nvarchar(20),Gender nchar(5),BirthDate date,PhoneNumber nchar(20),PRIMARY KEY (UserID))";
     "CREATE TABLE NationalityTable (NationalityID INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,Country NCHAR(100) NOT NULL,NationalityName NCHAR(100) NOT NULL)";
     "CREATE TABLE UserNationalityTable (NationalityID INT, UserID INT, PassportNumber NVARCHAR(9), TurkishIdendityNumber NVARCHAR(11))";
    "CREATE TABLE AddressTable (UserID INT, City NVARCHAR(30), District NVARCHAR(30), Neighborhood NVARCHAR(30), Street NVARCHAR(30), ApartmentNumber INT, PostCode INT)";
     "CREATE TABLE EducationTable (EducationID int NOT NULL AUTO_INCREMENT, UserID int, UnivercityName nvarchar(50), FacultyName nvarchar(50), DepartmentName nvarchar(30), GraduationStatus nvarchar(30), GraduationDate date, GradeAverage float, primary key(EducationID))";
     "CREATE TABLE DisabilityTable(UserID int, DisabilityStatus nchar(50), DisabilityName nchar(50))";
     "CREATE TABLE AccountTable (UserID int, EMail nchar(100), Passwordd nchar(100), AccountOpeningDate date)";
     "CREATE TABLE DocumentTable (DocumentID int NOT NULL AUTO_INCREMENT, DocumentType varchar(20), primary key(DocumentID))";
     "CREATE TABLE UserDocumentTable (UserID INT, DocumentID INT, DocumentUploadDate date )";
    
con.query(sql, function (err, result){
        if(err) throw err;
        console.log("Tablo Oluşturuldu!");
    });
})