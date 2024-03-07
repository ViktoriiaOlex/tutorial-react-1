import { useEffect } from "react"

const MailBox = ({emails, onClose, onLogEmail, onDeleteEmail, emailCounter}) => {

//     useEffect (() => {
// const onMouseMove = ()=> {
//     console.log("Moving");
// }

//         window.addEventListener("mousemove", onMouseMove);

//         console.log("Mailbox has been MOUNTED");

//         return () => {
//             window.removeEventListener("mousemove", onMouseMove);
//             console.log("Mailbox has been Unmounted");
//         }
//     }, [])

// Якщо хочу , щоб закривалося з клавіші, то Escape

useEffect(() => {
    const onKeyDown = (event) => {
    console.log(`You clicked on button ${event.code}`);
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);
    // const handleClick = (event) => {
    //     console.log(event);
    // }
// const handleDelete = (mailId) => {
// console.log("mailId: ", mailId);
// }
    return (
        <div>
            <h3>MailBox <b>{emailCounter}</b></h3>
            <ul>
                {emails.map((email) => (
                    <li key={email.id}>
                        {email.email}{" "}
                        <button onClick={() => onDeleteEmail(email.id)}>&times;</button>
                    </li>
                ))}
                
                {/* Статичнва розмітка 
                <li>Mail 1 <button onClick={() => onDeleteEmail(1)}>&times;</button></li>
                <li>Mail 2 <button onClick={() => onDeleteEmail(2)}>&times;</button></li>
                <li>Mail 3 <button onClick={() => onDeleteEmail(3)}>&times;</button></li> */}
            </ul>
            {/* <button onClick={handleClick} */}
            <button onClick={onLogEmail}
                type="button">
                Send Mail
            </button>
        </div>
    );
};

export default MailBox;