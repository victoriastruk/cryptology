const caesarCipher = ( str, key ) => {
   if ( key < 0 ) {
      return caesarCipher( str, key + 26 )
   }

   let output = ""

   for ( let i = 0; i < str.length; i++ ) {

      let c = str[i]

      if ( c.match( /[a-z]/i ) ) {

         let code = str.charCodeAt( i )

         if ( code >= 65 && code <= 90 ) {
            c = String.fromCharCode( ( ( code - 65 + key ) % 26 ) + 65 )
         }

         else if ( code >= 97 && code <= 122 ) {
            c = String.fromCharCode( ( ( code - 97 + key ) % 26 ) + 97 )
         }
      }
      output += c
   }
   console.log( `${str} -> ${output}\n` )
}

console.log( "Encript: " )
caesarCipher( 'ALEA JACTA EST', 3 )
console.log( "Decript: " )
caesarCipher( 'DOHD MDFWD HVW', -3 )
console.log( "Encript: " )
caesarCipher( 'STRUK', 8 )
console.log( "Decript: " )
caesarCipher( 'ABZCS', -8 )
console.log( "Encript: " )
caesarCipher( 'Attack at dawn!', 12 )
console.log( "Decript: " )
caesarCipher( 'Mffmow mf pmiz!', -12 )