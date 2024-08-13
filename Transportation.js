import "../styles/transportation.css";

function Transportation() {
  return (
    <div className="mty" id="tranport">
      <div class="tabs">
        <input type="radio" name="tabs" id="tab1" checked />
        <label for="tab1">
          <img className="impy" src="../images/Layer 1.png" alt="1" />
          <h5>SAME DAY</h5>
        </label>

        <input type="radio" name="tabs" id="tab2" />
        <label for="tab2">
          <img className="impy" src="../images/Layer 2.png" alt="1" />
          <h5>NEXT DAY</h5>
        </label>

        <input type="radio" name="tabs" id="tab3" />
        <label for="tab3">
          <img className="impy" src="../images/Layer 3.png" alt="1" />
          <h5>RELAY</h5>
        </label>

        <input type="radio" name="tabs" id="tab4" />
        <label for="tab4">
          <img className="impy" src="../images/Layer 4.png" alt="1" />
          <h5>AM/PM DELIVERY</h5>
        </label>

        <input type="radio" name="tabs" id="tab5" />
        <label for="tab5">
          <img className="impy" src="../images/Layer 5.png" alt="1" />
          <h5>WEEKEND SERVICE</h5>
        </label>

        <div id="tab-content1" class="tab-content">
          <img className="imgyy" src="../images/333.png" alt="32" />
          <div className="callin-btn3">
            <a href="#arare"><i class="fa-solid fa-angle-down"></i></a>
            </div>
          <div className="data-flex">
            <img src="#" alt="" />
          </div>
        </div>

        <div id="tab-content2" class="tab-content">
          <img className="imgyy" src="../images/333.png" alt="32" />
          <div className="callin-btn3">
            <a href="#arare"><i class="fa-solid fa-angle-down"></i></a>
            </div>
          <p>
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the look and formatting of a document written in a markup
            language.
          </p>
        </div>

        <div id="tab-content3" class="tab-content">
          <img className="imgyy" src="../images/333.png" alt="32" />
          <div className="callin-btn3">
            <a href="#arare"><i class="fa-solid fa-angle-down"></i></a>
            </div>
          <p>
            jQuery is a fast, small, and feature-rich JavaScript library. It
            makes things like HTML document traversal and manipulation, event
            handling, animation, and Ajax much simpler with an easy-to-use API
            that works across a multitude of browsers.
          </p>
        </div>

        <div id="tab-content4" class="tab-content">
          <img className="imgyy" src="../images/333.png" alt="32" />
          <div className="callin-btn3">
            <a href="#arare"><i class="fa-solid fa-angle-down"></i></a>
            </div>
          <p>
            jQuery is a fast, small, and feature-rich JavaScript library. It
            makes things like HTML document traversal and manipulation, event
            handling, animation, and Ajax much simpler with an easy-to-use API
            that works across a multitude of browsers.
          </p>
        </div>

        <div id="tab-content5" class="tab-content">
          <img className="imgyy" src="../images/333.png" alt="32" />
          <div className="callin-btn3">
            <a href="#arare"><i class="fa-solid fa-angle-down"></i></a>
            </div>
          <p>
            jQuery is a fast, small, and feature-rich JavaScript library. It
            makes things like HTML document traversal and manipulation, event
            handling, animation, and Ajax much simpler with an easy-to-use API
            that works across a multitude of browsers.
          </p>
        </div>
        
      </div>
      
    </div>
  );
}

export default Transportation;
