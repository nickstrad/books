package main

type book struct {
  name string
  url string
  owned bool
}

type booklist struct {
  books []book
}

func (booklist) addBook() { }
func (booklist) removeBook() { }
func (booklist) editBook() { }

func main() {

}
