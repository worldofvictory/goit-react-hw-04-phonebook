export const ContactListItem = ({data, deleteContact}) => {
    return (
               <li>
                    {data.name} : {data.number}   
               <button onClick={()=>deleteContact(data.id)} type="button"> delete </button>     
    </li>
    )
}