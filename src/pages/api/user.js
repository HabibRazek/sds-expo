import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import path from 'path';
import pdf from 'html-pdf';

const prisma = new PrismaClient();

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user:'sdsexpo@gmail.com',  // Use environment variables
//         pass:'qhhnxbtqdaozewbm'
//     }
// });

let transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true,
    auth: {
        user:'contact@sds-expo.com',
        pass:'W@hiba2023'
    }
});

function generateEmailTemplate(userName) {
    return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7; text-align: center;">
    <img 
    src="cid:unique@kreata.ee" 
    alt="sds expo 2023" 
    style="max-width: 100%;" 
    width="350" 
    height="120" 
    />  
    <h2 style="color: #333; font-size: 24px; font-weight: 800; ">
        <span  style="color: #dc2626; font-size: 24px; font-weight: 600;">Bonjour</span> ${userName}
    </h2>
    <p style="font-size: 18px;">Votre inscription en tant que visiteur au <a href="https://www.sds-expo.com/" style="color:#374151; font-weight: 500;">SDS EXPO 2023</a> est effectuée avec succès. </p>
    <p style="font-size: 18px;">Vous recevrez votre badge d'accès gratuit dans un autre mail dès qu'il sera disponible.</p>
    <p style="font-size: 18px;">Nous serions très heureux de vous accueillir au rendez-vous incontournable SDS EXPO 2023.</p>
    <p style="margin-bottom: 0; font-size: 18px; color: #374151; font-weight: 600; ">Merci pour votre intérêt.</p>
    
</div>
`
}



export default async function handle(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phoneNumber, nationality, companyName, department, jobTitle, genre } = req.body;
        try {
            const newUser = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    nationality,
                    companyName,
                    department,
                    jobTitle,
                    genre
                }
            });
            const emailContent = generateEmailTemplate(firstName);
            await transporter.sendMail({
                from: 'contact@sds-expo.com',
                to: email,
                subject: 'Inscription réussie à SDS EXPO 2023',
                html: emailContent,
                attachments: [
                    {
                        filename: 'Supply Chain Delivery Services Exhibition.png',
                        path: path.join(process.cwd(), 'public', 'Supply Chain Delivery Services Exhibition.png'),
                        cid: 'unique@kreata.ee'
                    },
                ]
            });

            res.json(newUser);
        } catch (error) {
            res.status(400).json({ error: 'Failed to create user', message: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
