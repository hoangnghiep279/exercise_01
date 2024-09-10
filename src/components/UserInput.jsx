export default function UserInput({onChange, userInput}){
    return <section id="user-input">
        <div className="input-group">
         <div>
                <label htmlFor="initialInvestment"></label>
                <input type="number" name="initialInvestment" required value={userInput.initialInvestment} onChange={(e)=>onChange('initialInvestment', e.target.value)} />
         </div>
         <div>
                <label htmlFor="annualInvestment"></label>
                <input type="number" name="annualInvestment" required value={userInput.annualInvestment} onChange={(e)=>onChange('annualInvestment', e.target.value)} />
         </div>
        </div>
        <div className="input-group">
         <div>
                <label htmlFor="expectedReturn"></label>
                <input type="number" name="expectedReturn" required value={userInput.expectedReturn} onChange={(e)=>onChange('expectedReturn', e.target.value)} />
         </div>
         <div>
                <label htmlFor="duration"></label>
                <input type="number" name="duration" required value={userInput.duration} onChange={(e)=>onChange('duration', e.target.value)} />
         </div>
        </div>
    </section>
}