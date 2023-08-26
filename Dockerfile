FROM golang:1.21.0

WORKDIR /usr/src/app

RUN go install github.com/cosmtrek/air@latest

COPY . .

RUN go mod tidy

CMD ["air", "./main.go", "-b", "0.0.0.0"]