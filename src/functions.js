async function getScale(input) {
    this.getScaleStartingPosition(input, function(startPosition) {
      console.log(startPosition);
    });
  }


  async function getScaleStartingPosition(input) {
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    if (input.length == 2) {
      let inputSliced = input.slice(0, 1);
      let inputEnd = input.slice(-1);
      let offset = 0;

      // Compensates for sharps or flats
      if (inputEnd == "#") {
        offset++;
      } else if (inputEnd == "b") {
        offset--;
      }

      let result = notes.indexOf(inputSliced);
      result += offset;
      //console.log(result);
      //callback(result);

      if (result > 11) {
        result = result % 11;
      }
      return result;
    } else {
      let result = notes.indexOf(input);
      //console.log(result);
      //callback(result);
      if (result > 11) {
        result = result % 11;
      }
      return result;
    }
  }

export { getScale, getScaleStartingPosition}