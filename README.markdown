# Backbone On Rails

This is an attempt to create a backbone.js adapter for Ruby On Rails.
It is something I just wrote to make some code work for me. Not very well thought through.

# What does it do?

*Problem:*

What Rails expects on users/update:

{:user => {:name => "Jacek"}}

What Backbone sends:

{:name => "Jacek"}

What Rails generates on users/show:

{:user => {:name => "Jacek"}}

What Backbone expects:

{:name => "Jacek"}

*Solution:*

The adapter overrides Backbone.Model.prototype.parse method to include nesting.

Quote form backbone.js:

<pre>
    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse : function(resp) {
      return resp;
    },
</pre>




# Installation

Just link the file after linking backbone.js
