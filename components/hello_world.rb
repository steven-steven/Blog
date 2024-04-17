# ./components/hello_world.rb
class HelloWorld < Phlex::HTML
  def initialize(greeting: "Hello World") = @greeting = greeting
  def template = h1 { @greeting }
end
