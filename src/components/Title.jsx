
const Title = ({ title }) => {
    return (
        <>
            <h2 className="fs-5 mb-4 header fw-bold d-flex align-items-center">
                <span className="before fs-6 me-2"></span>
                {title}
            </h2>
        </>
    )
}

export default Title
