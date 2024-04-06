package main

type User struct {
	Fname      string `json:"fname"`
	Lname      string `json:"lname"`
	Location   string `json:"location"`
	Bio        string `json:"bio"`
	Email      string `json:"email"`
	Username   string `json:"username"`
	ProfilePic string `json:"profilePic"`
}

type BookResponse struct {
	BookID string `json:"bookID"`
	Title  string `json:"title"`
}

type PostId struct {
	PostId string `json:"postId"`
}

type Post struct {
	Picture                    string `json:"picture"`
	Description                string `json:"description"`
	Duration                   string `json:"duration"`
	RequirementsAndRestriction string `json:"requirementsAndRestriction"`
	Location                   string `json:"location"`
	Cost                       string `json:"cost"`
	Username                   string `json:"username"`
}

type Dude struct {
	Username string `json:"username"`
}

type City struct {
	Location string `json:"location"`
}

type Book struct {
	Username string `json:"username"`
	PostID   string `json:"postID"`
	Title    string `json:"title"`
}
