const MailBox = ({onLogEmail, onDeleteEmail, emailCounter}) => {

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
                <li>Mail 1 <button onClick={() => onDeleteEmail(1)}>&times;</button></li>
                <li>Mail 2 <button onClick={() => onDeleteEmail(2)}>&times;</button></li>
                <li>Mail 3 <button onClick={() => onDeleteEmail(3)}>&times;</button></li>
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