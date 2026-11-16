// import dynamic from "next/dynamic";

// const sgmail = require("@sendgrid/mail");

// sgmail.setApiKey(
//   process.env.SENDGRID_API_KEY // never hard-code keys; set this in .env (not committed)
// );

// const sendEmail = async (obj) => {
  
//   let emailObj = {
//     to: "aroojsaghar648@gmail.com",
//     from: "hamza.a@reactivespace.com",
//     subject: "dsfgsdf",
//     html: `<!doctype html>
// 	<html lang="en">
// 	<head>
// 	  <meta charset="utf-8">
// 	  <title>Confirmation</title>
// 	</head>
// 	<body>
// 	  <div style="max-width: 90%;margin: auto;">
// 	    <p>You have a new contact request</p>
// 	      <h3>Contact Details</h3>
// 	      <ul>
// 	        <li>Name:${obj.name}</li>
// 	        <li>Number: ${obj.number}</li>
// 	        <li>Email: ${obj.email}</li>
// 	        <li>zepCode or venue : ${obj.venue || obj.zepCode }</li>
// 	        <li>Message: ${obj.message}</li>
// 	      </ul>
// 	  </div>
// 	</body>
// 	</html>`,
//   };
  
//   return await sgmail.send(emailObj);
// };
// export default dynamic (() => Promise.resolve(sendEmail), {ssr: false})

