import '../styles/ImageUpload.css';
import {createRef, useState} from "react"; // Create a CSS file for styling

function ImageUpload(x) {
    const [dragging, setDragging] = useState(false);
    const fileInputRef = createRef();

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault()
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const droppedFile = Array.from(e.dataTransfer.files);

        let fileData = e.dataTransfer.files[0]
        if(/^image/.test(fileData.type)) {
            x.setImage(droppedFile);
        } else {
            alert('Please upload an image')
        }
    };

    const handleFileInputChange = (e) => {
        const selectedFile = Array.from(e.target.files);
        x.setImage(selectedFile);
    };

    const handleDivClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    return (
            <div
                className={`image-drop-box ${x.image.length !== 0 ? 'has-image' : ''} ${dragging ? 'dragging' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={handleDivClick}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    id="file-input"
                    onChange={handleFileInputChange}
                    accept="image/*"
                    ref={fileInputRef}
                />
                {x.image.length === 0 && <label htmlFor="file-input">
                        {dragging ? 'Drop files here' : 'Drag & Drop files or click to browse'}
                </label>}
                {x.image.length > 0 && <img
                    className="selected-image image border"
                    src={URL.createObjectURL(x.image[0])} alt="uploaded-image"
                />}
            </div>
    );
}

export default ImageUpload;
