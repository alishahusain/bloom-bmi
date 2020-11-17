import './App.css';


function App() {


  return (
    <div className="wrapper">
      <h1>Body Mass Index (BMI) Calculator Tool</h1>
      <form>
      <fieldset>
         <label>
           <p>Weight</p>
           <input name="weight" />
         </label>
         <select name="w_u">
         <option value="lbs">lbs</option>
         <option value="kg">kg</option>
       </select>
       </fieldset>
       <fieldset>
         <label>
           <p>Height (feet/inches)</p>
         </label>

         <select name="h_in">
         <option value="4">4'</option>
         <option value="5">5'</option>
         <option value="6">6'</option>
         <option value="7">7'</option>
       </select>

         <select name="h_in">
         <option value="0">0"</option>
         <option value="1">1"</option>
         <option value="2">2"</option>
         <option value="3">3"</option>
         <option value="4">4"</option>
         <option value="5">5"</option>
         <option value="6">6"</option>
         <option value="7">7"</option>
         <option value="8">8"</option>
         <option value="9">9"</option>
         <option value="10">10"</option>
         <option value="11">11"</option>
       </select>

       </fieldset>
       <label>
           <p>OR</p>
         </label>
       <fieldset>
         <label>
           <p>Height (cm/inches) </p>
           <input name="height" />
         </label>
         <select name="h_u">
         <option value="cm">cm</option>
         <option value="in">inches</option>
       </select>
       </fieldset>


       <button type="submit" onClick="" >Submit</button>
      </form>
    </div>
  );
}

export default App;
