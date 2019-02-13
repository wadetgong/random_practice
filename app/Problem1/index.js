import React from 'react'

const Problem1 = () => {
  return (
    <div>
      <div className="alert alert-secondary" role="alert">
        <h4 className="alert-heading text-center">Problem 1</h4>
        <p>In the section below, create a widget that generates cat facts. For each cat fact generated, generate an accompanying cat image to go along side it.</p>
        <hr />
        <ul>
          <li>Retrieve cat facts from the cat-facts API: <span><a href="https://alexwohlbruck.github.io/cat-facts/docs/" target="_blank" rel="noopener noreferrer">https://alexwohlbruck.github.io/cat-facts/docs/</a></span></li>
          <li>Retrieve cat images from TheCatApi API: <span><a href="https://docs.thecatapi.com/" target="_blank" rel="noopener noreferrer">https://docs.thecatapi.com/</a></span></li>
          <li>Once you can generate a single cat fact, update your functionality to generate a number of cat facts as specified by the number input tag.</li>
        </ul>
      </div>
      <div className="container">
        <h4 className="text-center">Cat Fact Generator</h4>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <input
            className="form-control"
            type="number"
            placeholder="0"
            name="quantity"
            style={{width: '100px'}}
          />
          <button
            type="button"
            className="btn btn-primary"
            style={{marginLeft: '5px'}}
          >
            Get Cats
          </button>
        </div>
      </div>
    </div>
  )
}

export default Problem1
