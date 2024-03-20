function check_validity() {
   var user_inputs = [
      { "element_id": "Fname", "type": 0, "Name": "first name" },
      { "element_id": "Lname", "type": 0, "Name": "last name"  },
      { "element_id": "car", "type": 1, "Name": "transportation type"  },
      { "element_id": "bike", "type": 1, "Name": "transportation type" },
      { "element_id": "bus", "type": 1, "Name": "transportation type"  },
      { "element_id": "commute", "type": 1, "Name": "transportation type" },
      { "element_id": "month", "type": 0, "Name": "birth month"  },
      { "element_id": "text-area", "type": 0, "Name": "description"  }
   ]

   var check_boxes = false;
   for (let i = 0; i < user_inputs.length; i++) {
      var cur_element = document.getElementById(user_inputs[i]["element_id"]);
      if (user_inputs[i]["type"] == 0) {
         if (cur_element.value == "") {
            return [false, `Currently missing your ${user_inputs[i]["Name"]}`]
         }
      }
      else {
         if (cur_element.checked) {
            check_boxes = true
         }
      }
   }
   if (!check_boxes) {
      return [false, `Currently missing your ${user_inputs[2]["Name"]}`]
   }
   return [true, undefined]
}

document.addEventListener("keypress", function (ev) {
   if (String(ev.key) == "Enter") {
      submitForm()
   }

})

function submitForm() {
   var form_status = check_validity()
   if (!form_status[0]) {
      alert('Please complete the all fields. \n\n' + form_status[1] + "!!!");
   } else {
      // document.getElementById('mainForm').submit();
      alert('Thank you for submitting!');
    }
}

function resetForm() {
   document.getElementById('mainForm').reset();
}

