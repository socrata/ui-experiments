$(document).ready(function () {

  // TEST A
  // Only show second set of fields when the first set is configured
  $('#smart-status-test-b').
    find('input, select').
    on('change', function() {
      var $optionalFields = $('tr.optional-fields');
      if ($('#test_wizard_test_b_field_1_number_value').val().length > 0 && $('#test_wizard_test_b_field_1_status').val().length > 0) {
        $optionalFields.removeClass('hidden');
      } else {
        $optionalFields.addClass('hidden');
      }
    });

  // TEST B
  var testB_field1Status = document.getElementById('test_wizard_test_b_field_1_status');
  var testB_field2Status = document.getElementById('test_wizard_test_b_field_2_status');

  function testB_setStatusFields() {
    var $changed = $(this);
    var selectedValue = $changed.val();

    function getOtherValue(el) {
      return _
        .chain(el.options)
        .map(function(option) {
          return option.value;
        })
        .compact()
        .without(selectedValue)
        .head()
        .value();
    }

    if (!_.isEmpty(selectedValue)) {
      if ($changed.attr('id') === testB_field1Status.id) {
        testB_field2Status.value = getOtherValue(testB_field1Status);
      } else {
        testB_field1Status.value = getOtherValue(testB_field2Status);
      }
    }
  }

  $(testB_field1Status).on('change', testB_setStatusFields);
  $(testB_field2Status).on('change', testB_setStatusFields);


  // TEST C
  // Only show second set of fields when the first set is configured
  $('#smart-status-test-c').
    find('select').
    on('change', function() {
      var $optionalFields = $('tr.optional-fields');
      console.log('this', this);
      console.log('optionalFields', $optionalFields);
      if ($('#test_wizard_test_c_field_1_above_below').val().length > 0 && $('#test_wizard_test_c_field_1_status').val().length > 0) {
        $optionalFields.removeClass('hidden');
      } else {
        $optionalFields.addClass('hidden');
      }
    });

  // TEST D
  // Selecting a value in one dropdown should affect the options available in the second dropdown.
  var testD_field1Status = document.getElementById('test_wizard_test_d_field_1_status');
  var testD_field2Status = document.getElementById('test_wizard_test_d_field_2_status');

  function testD_setStatusFields() {
    var $changed = $(this);
    var selectedValue = $changed.val();

    function getOtherValue(el) {
      return _
        .chain(el.options)
        .map(function(option) {
          return option.value;
        })
        .compact()
        .without(selectedValue)
        .head()
        .value();
    }

    if (!_.isEmpty(selectedValue)) {
      if ($changed.attr('id') === testD_field1Status.id) {
        testD_field2Status.value = getOtherValue(testD_field1Status);
      } else {
        testD_field1Status.value = getOtherValue(testD_field2Status);
      }
    }
  }

  $(testD_field1Status).on('change', testD_setStatusFields);
  $(testD_field2Status).on('change', testD_setStatusFields);
});
