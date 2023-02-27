const uppercase = () =>
   [...Array( 26 )].map( ( n, i ) => `${String.fromCharCode( i + "A".charCodeAt() )}` );
const lowercase = () =>
   [...Array( 26 )].map( ( n, i ) => `${String.fromCharCode( i + "a".charCodeAt() )}` );

const mod = ( a, b ) => {
   const c = a % b;
   return c < 0 ? c + b : c;
};

const chiper = ( array, shift ) => {
   const cipher = {};
   array.forEach( ( value, index ) => {
      cipher[value] = array[mod( index + shift, array.length )];
   } );
   return cipher;
};

const caesarChipher = ( shift ) => {
   return {
      ...chiper( uppercase(), shift ),
      ...chiper( lowercase(), shift ),
   };
};

const processCharacter = ( cipher, character ) =>
   cipher.hasOwnProperty( character ) ? cipher[character] : character;

   const caesar = (text, shift) => {
      return String.fromCharCode(
        ...text.split('').map(char => ((char.charCodeAt() - 65 + shift) % 26) + 65),
      );
    };
console.log(caesar("STRUK", 8))
console.log(caesar("Attack at dawn!", 12))