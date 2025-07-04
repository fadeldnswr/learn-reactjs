import React from "react";

const SayHelloForm = () => {
  return (
    <div>
      <form>
        <input id="text-id" />
        <button onClick={(e) => {
          e.preventDefault(); // Prevents the default form submission 
          const input = document.getElementById('text-id').value;
          document.getElementById("title").innerText = `Halo ${input}`; // Updates the title with the input value
        }}></button>
      </form>
      <h1 id="title">Halo Gais</h1>
    </div>
  )
}

export default SayHelloForm;