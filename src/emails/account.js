const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vietneu.92@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vietneu.92@gmail.com',
        subject: 'Sorry for the cancelation',
        text: `Dear ${name}, sorry for seeing you leaving.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
// sgMail.send({
//     to: 'vietviss@gmail.com',
//     from: 'vietneu.92@gmail.com',
//     subject: 'My first sended email',
//     text: 'Hope this one will work'
// })