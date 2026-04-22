
const Service = ({ anim, icon, title, desc, bord }) => {
    return (
        <>
            <div className={`service pt-3 pb-3 d-flex flex-column justify-content-center align-items-center ${anim}`}
                style={{ border: bord, borderRadius: "4px" }}>
                <span className="icon fs-4 fw-bold mb-3 d-flex justify-content-center align-items-center">
                    {icon}
                </span>
                <span className="title fs-5 fw-bold mb-1">
                    {title}
                </span>
                <span className="desc mb-2">
                    {desc}
                </span>
            </div>
        </>
    )
}
export default Service
