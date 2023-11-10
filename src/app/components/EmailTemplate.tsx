interface EmailTemplateProps {
    sender: string;
    title: string;
    message: string;
  }
  
  export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    sender,
    title,
    message,
  }) => (
    <div>
      <h2>Sent by: {sender}</h2>
      <h3>{title}!</h3>
      <p>{message}</p>
    </div>
  );
  
  export default EmailTemplate;
  