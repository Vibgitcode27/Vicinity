package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/WH055_MindNotWorking/db"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"net/http"
)

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

func PostUser(w http.ResponseWriter, r *http.Request) {
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		http.Error(w, "Failed to connect to database", http.StatusInternalServerError)
		return
	}
	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()

	ctx := context.Background()

	createdUser, err := client.User.CreateOne(
		db.User.LastName.Set(user.Lname),
		db.User.FirstName.Set(user.Fname),
		db.User.ProfilePicture.Set(user.ProfilePic),
		db.User.Location.Set(user.Location),
		db.User.Bio.Set(user.Bio),
		db.User.Email.Set(user.Email),
		db.User.Username.Set(user.Username),
	).Exec(ctx)

	if err != nil {
		http.Error(w, "Failed to create user", http.StatusInternalServerError)
		return
	}

	result, _ := json.MarshalIndent(createdUser, "", "  ")
	fmt.Printf("Created user: %s\n", result)

	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("User created successfully"))
}

func GetAllPosts(w http.ResponseWriter, r *http.Request) {
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		http.Error(w, "Failed to connect to database", http.StatusInternalServerError)
		return
	}
	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()

	ctx := context.Background()

	posts, err := client.Post.FindMany().Exec(ctx)

	if err != nil {
		http.Error(w, "Failed to fetch posts", http.StatusInternalServerError)
		return
	}
	data, err := json.Marshal(posts)
	if err != nil {
		http.Error(w, "Failed to marshal JSON", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	_, err = w.Write(data)
	if err != nil {
		http.Error(w, "Failed to write response", http.StatusInternalServerError)
		return
	}
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/postuser", PostUser).Methods("POST")
	r.HandleFunc("/getPosts", GetAllPosts).Methods("GET")

	corsHandler := cors.Default().Handler(r)

	http.ListenAndServe(":4000", corsHandler)
}
