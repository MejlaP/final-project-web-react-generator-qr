import "./AllInformations.css"

const AllInformations = ({ image, title, description }) => {
    return <div className="one-information">
        <img src={image} alt="real-madrid" />
        <h5 className="information-title">{title}</h5>
        <p className="information-description">{description}</p>
    </div>
}

export default AllInformations