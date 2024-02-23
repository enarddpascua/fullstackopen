const Notification = ({message}) => {
    if (message === ''){
        return null
    }

    return(
        <div className="notification-wrapper">
            <h2>{message}</h2>
        </div>
    )
}

export default Notification