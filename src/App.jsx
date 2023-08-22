import viteLogo from "/vite.svg";
import "./App.css";
import Element from "./components/Element";

function App() {
  return (
    <div className="periodic_table">
      <div className="top">
        <div className="left">
          <div className="col">
            <Element number="1"></Element>
            <Element number="3"></Element>
            <Element number="11"></Element>
            <Element number="19"></Element>
            <Element number="37"></Element>
            <Element number="55"></Element>
            <Element number="87"></Element>
          </div>
          <div className="col">
            <Element number="4"></Element>
            <Element number="12"></Element>
            <Element number="20"></Element>
            <Element number="38"></Element>
            <Element number="56"></Element>
            <Element number="88"></Element>
          </div>
          <div className="col">
            <Element number="21"></Element>
            <Element number="39"></Element>
            <Element number="57"></Element>
            <Element number="89"></Element>
          </div>
        </div>
        <div className="mid">
          <div className="col">
            <Element number="22"></Element>
            <Element number="40"></Element>
            <Element number="72"></Element>
            <Element number="104"></Element>
          </div>
          <div className="col">
            <Element number="23"></Element>
            <Element number="41"></Element>
            <Element number="73"></Element>
            <Element number="105"></Element>
          </div>
          <div className="col">
            <Element number="24"></Element>
            <Element number="42"></Element>
            <Element number="74"></Element>
            <Element number="106"></Element>
          </div>
          <div className="col">
            <Element number="25"></Element>
            <Element number="43"></Element>
            <Element number="75"></Element>
            <Element number="107"></Element>
          </div>
          <div className="col">
            <Element number="26"></Element>
            <Element number="44"></Element>
            <Element number="76"></Element>
            <Element number="108"></Element>
          </div>
          <div className="col">
            <Element number="27"></Element>
            <Element number="45"></Element>
            <Element number="77"></Element>
            <Element number="109"></Element>
          </div>
          <div className="col">
            <Element number="28"></Element>
            <Element number="46"></Element>
            <Element number="78"></Element>
            <Element number="110"></Element>
          </div>
          <div className="col">
            <Element number="29"></Element>
            <Element number="47"></Element>
            <Element number="79"></Element>
            <Element number="111"></Element>
          </div>
          <div className="col">
            <Element number="30"></Element>
            <Element number="48"></Element>
            <Element number="80"></Element>
            <Element number="112"></Element>
          </div>
          <div className="col">
            <Element number="5"></Element>
            <Element number="13"></Element>
            <Element number="31"></Element>
            <Element number="49"></Element>
            <Element number="81"></Element>
            <Element number="113"></Element>
          </div>

          <div className="col">
            <Element number="6"></Element>
            <Element number="14"></Element>
            <Element number="32"></Element>
            <Element number="50"></Element>
            <Element number="82"></Element>
            <Element number="114"></Element>
          </div>
          <div className="col">
            <Element number="7"></Element>
            <Element number="15"></Element>
            <Element number="33"></Element>
            <Element number="51"></Element>
            <Element number="83"></Element>
            <Element number="115"></Element>
          </div>
          <div className="col">
            <Element number="8"></Element>
            <Element number="16"></Element>
            <Element number="34"></Element>
            <Element number="52"></Element>
            <Element number="84"></Element>
            <Element number="116"></Element>
          </div>
          <div className="col">
            <Element number="9"></Element>
            <Element number="17"></Element>
            <Element number="35"></Element>
            <Element number="53"></Element>
            <Element number="85"></Element>
            <Element number="117"></Element>
          </div>
          <div className="col">
            <Element number="2"></Element>
            <Element number="10"></Element>
            <Element number="18"></Element>
            <Element number="36"></Element>
            <Element number="54"></Element>
            <Element number="86"></Element>
            <Element number="118"></Element>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="row">
          <Element number="58"></Element>
          <Element number="59"></Element>
          <Element number="60"></Element>
          <Element number="61"></Element>
          <Element number="62"></Element>
          <Element number="63"></Element>
          <Element number="64"></Element>
          <Element number="65"></Element>
          <Element number="66"></Element>
          <Element number="67"></Element>
          <Element number="68"></Element>
          <Element number="69"></Element>
          <Element number="70"></Element>
          <Element number="71"></Element>
        </div>
        <div className="row">
          <Element number="90"></Element>
          <Element number="91"></Element>
          <Element number="92"></Element>
          <Element number="93"></Element>
          <Element number="94"></Element>
          <Element number="95"></Element>
          <Element number="96"></Element>
          <Element number="97"></Element>
          <Element number="98"></Element>
          <Element number="99"></Element>
          <Element number="100"></Element>
          <Element number="101"></Element>
          <Element number="102"></Element>
          <Element number="103"></Element>
        </div>
      </div>
    </div>
  );
}

export default App;
