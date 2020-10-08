const nodemailer = require("nodemailer");
let weather = require("weather-js");

weather.find({ search: "Ankara, Turkey", degreeType: "C" }, function (
   err,
   result
) {
   if (err) console.log(err);
   console.log(result);
   mailSender(result)
});

function mailSender(temp){
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
           user: "",
           pass: '',
        },
     });
     
     const mailOptions = {
        from: "",
        to: "",
        subject: "Sending Email using Node.js",
        text: "<p>text</p>",
        html: `Merhaba Sevgili Kullanıcı ${temp[0].location.name}'da Hava Bugün:${temp[0].current.temperature} Derece</p>`,
     };
     
     transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
           console.log(error);
        } else {
           console.log("Email sent: " + info.response);
        }
     });
     
}

