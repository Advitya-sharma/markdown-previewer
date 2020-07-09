import React from 'react'

export default function Header() {
    return <div style={headerStyle}>Markdown Previewer</div>;
}

const headerStyle = {
  width: "100%",
  height: "50px",
  textAlign: "center",
  backgroundColor: "#DE1300",
  lineHeight: "45px",
  padding: "0",
  fontSize: "40px",
  margin: "0 0 20px 0",
};