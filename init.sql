CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);
INSERT INTO users (name) VALUES ('Alice'), ('Bob'), ('Charlie');