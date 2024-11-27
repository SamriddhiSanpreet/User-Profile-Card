function UserCard(props){
    const{name,email,imgUrl,age,gender,phone}=props;

    return<div className="d-flex">
        <div>
            <div className="card">
                <img src={imgUrl} width="300px"/>
                <h2>{name}</h2>
                <h3>{email}</h3>
                <p>{age}</p>
                <p>{gender}</p>
                <p>{phone}</p>
            </div>
        </div>
    </div>
}
export default UserCard;