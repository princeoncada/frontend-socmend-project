import ActionAreaCard from "./ActionAreaCard.jsx";
import "../styles/Cards.css"
import {Masonry} from "@mui/lab";

function Cards(props) {
    return (
        <>
            <Masonry columns={4} spacing={2} sx={{ maxWidth: "90%" }}>
                {/* eslint-disable-next-line react/prop-types */}
                {props.files.map((file) => {
                    return (
                        <ActionAreaCard
                            key={file.id}
                            title={file.name}
                            description="Test"
                            image={`data:image/png;base64,${file.data}`}
                        />
                    )
                })}
            </Masonry>
        </>
    )
}

export default Cards;