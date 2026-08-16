type draggable = {
    drag: () => void;
};

type resizable = {
    resize: () => void;
};

type UIWidget = draggable & resizable;


let textbox: UIWidget = {
    drag: () => {
        console.log("Dragging the textbox");
    },
    resize: () => {
        console.log("Resizing the textbox");
    }
};

textbox.drag(); // Output: Dragging the textbox
textbox.resize(); // Output: Resizing the textbox