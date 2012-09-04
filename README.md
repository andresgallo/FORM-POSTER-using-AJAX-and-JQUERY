FORM-POSTER-using-AJAX-and-JQUERY-Andres Gallo
=================================

Sometimes one form does the trick, however it is versatile to have a sort of POST controller to allow infinite number of forms to exploit the beauty of one script to handle them all (ajax requests)

Using the script
---------------

* Use jquery in your project. Make sure jQuery is loaded before you call this script.  Jquery 1.7 and up 
* You dont need the two cases (FORMA and FORMB) in the switch statement. These are just examples as to how you can add specific behavior for specific forms.
* The override piece is also unecessary but will come in handy in case there is some behavior all switch "case"s should follow. It will pretty much append behavior to the callbacks.