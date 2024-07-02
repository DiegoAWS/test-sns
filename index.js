import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import dotenv from "dotenv";

dotenv.config();


const config = {
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_SNS_API_KEY || "",
        secretAccessKey: process.env.AWS_SNS_API_SECRET  ||""
    }
};

const client = new SNSClient(config);
const input = {
    Message: `Welcome to Cometcash! 
    
    Your verification code is 123456, valid for 5 minutes.
    
    If you did not request this code, please ignore this message.`, 
    PhoneNumber: "+37255576254",
};
const command = new PublishCommand(input);
const response = await client.send(command);

console.log({ response })