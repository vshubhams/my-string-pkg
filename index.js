//Step 1: proto method
//Step 2: window/global
//Step 3: ESM -> Import Export

//1. Write all methods
//2. Export all methods



    let _ = {} //an object which will contain all our method
        
    var firstLetterUp = function(givenString){
        // let givenstring = this
        let firstChar = givenString.charAt(0).toUpperCase();
        let remainingString = givenString.slice(1);
        let finalString = firstChar +remainingString;
        return finalString;
    }
    // console.log('str.firstLetterUp', str.firstLetterUp())

    var countWords = function(givenString){
        // let givenString = this;

        let words = givenString.split(" ");
        return words.length;
    }

    // 3. Mask sensitive data = shubhamv@gmail.com, s******@g****.com

    var maskEmail = function (givenString){
        // let givenString = this;
        const emailParts = givenString.split("@");

        if(emailParts.length!==2){
            throw new Error("Invalid Email");
        }

        const [name,domain]= emailParts;

        const [provider, ending] = domain.split(".");

        const maskName = name.charAt(0)+ "*".repeat(name.length-1);

        const maskDomain = domain.charAt(0) + "*".repeat(provider.length-1);

        const finalString = maskName + "@" + maskDomain + "." +ending;

        return finalString;
    }

    var readingTime = function(givenString){
        // words per minute  - adultspeed 200

        // let givenString = this;
        let words = countWords(givenString);

        const wordsPerMinuts = 200;

        const minutes = words/ wordsPerMinuts;

        let absoluteValue = Math.ceil(minutes);
        

        return absoluteValue;
}
    
export default firstLetterUp
export { readingTime, maskEmail }


