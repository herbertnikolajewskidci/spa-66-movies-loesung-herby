# Open Movie Database API (OMDb API)

In diesem Projekt werden wir eine Filmsuch-App mit Fetch erstellen.
Dies ist ein Beispiel für dieses Projekt, das mit Netlify bereitgestellt wird
[movie-search-app](https://compassionate-stonebraker-36a5b5.netlify.app/)

-   um sich für den API-Schlüssel anzumelden: [omdbapi](https://www.omdbapi.com/apikey.aspx)
-   über omdb api lesen : [omdbapi](http://www.omdbapi.com/)
-   Dies ist der Link zum Fetchen :

```javascript
http://www.omdbapi.com/?apikey=[yourkey]&.
```

-   Es gibt drei Möglichkeiten, eine Anfrage zu stellen:

    Suchen (s=): Liefert Ihnen alle möglichen Optionen.

```javascript
http://www.omdbapi.com/?apikey=[Ihr Schlüssel]&s=batman
```

Titel (t=): Ein Filmtitel.

```javascript
http://www.omdbapi.com/?apikey=[yourkey]&t=wanted
```

ID (i=): eine gültige IMDB ID (z.B. tt1234567)

```javascript
http://www.omdbapi.com/?apikey=[Ihr Schlüssel]&i=tt1234567
```

Hier ist eine Beispiel-JSON-Antwort für eine Abfrage von "Avengers Endgame":

```javascript
http://www.omdbapi.com/?apikey=[Ihr Schlüssel]&s=Avengers Endgame
```

```javascript
{
  "Search":[
     {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "imdbID":"tt4154796",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
     }
  ],
  "totalResults": "1",
  "Response": "True"
}
```

-   Titel
-   Jahr der Veröffentlichung
-   IMDb-ID
-   Typ (Film, Serie oder Episode)
-   Filmplakat-Bild

### ID oder Titel

Dieser Endpunkt liefert detailliertere Ergebnisse zu einem bestimmten Titel, den Sie im Sinn haben (IMDb-ID oder Filmtitel erforderlich).
Nehmen wir die IMDb-ID (tt4154796) aus der früheren Antwort "Avengers Endgame" und geben sie in diesen Endpunkt ein. Hier ist die Antwort von unserem Fetch:

```javascript
{
 "Title":"Avengers: Endgame",
   "Year":"2019",
   "Rated":"N/A",
   "Released":"26 Apr 2019",
   "Runtime":"N/A",
   "Genre":"Action, Adventure, Fantasy, Sci-Fi",
   "Director":"Anthony Russo, Joe Russo",
   "Writer":"Christopher Markus, Stephen McFeely, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (comic book)",
   "Actors":"Bradley Cooper, Brie Larson, Chris Hemsworth, Chris Evans",
   "Plot":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
   "Language":"English",
   "Country":"USA",
   "Awards":"N/A",
   "Poster":"https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
   "Ratings":[

   ],
   "Metascore":"N/A",
   "imdbRating":"N/A",
   "imdbVotes":"N/A",
   "imdbID":"tt4154796",
   "Type":"movie",
   "DVD":"N/A",
   "BoxOffice":"N/A",
   "Production":"Marvel Studios",
   "Website":"N/A",
   "Response":"True"
}

```

Wir können sehen, dass diese Funktion ein viel umfassenderes Ergebnis liefert, das auch den Titel umfasst:

-   Titel
-   Jahr der Veröffentlichung
-   Bewertung
-   Datum der Veröffentlichung
-   Laufzeit
-   Genre(s)
-   Regie
-   Drehbuchautor(en)
-   Schauspieler\*innen
-   Plot-Zusammenfassung
-   Sprache(n)
-   Land/Länder
-   Gewonnene Preise
-   Filmplakate (URL des Filmbildes)
-   Erhaltene Bewertungen
-   Metanote
-   IMDb-Bewertung
-   IMDb-Bewertungen
-   IMDb-ID
-   Typ (Film, Serie oder Episode)
-   DVD-Informationen
-   Box Office Ergebnisse
-   Produktionsfirma
-   Website(n)

## wie man beginnt :

-   Erstellen Sie ein neues Projekt
-   Sie müssen das Suchwort an die API mit fetch (die Methode ist POST) übermitteln und die moviesList (die Antwort) nach dem Abrufen der Daten von der API in einem Array speichern
-   Sie müssen das Array in Ihrem Html rendern
-   der Stil (CSS) ist nicht erforderlich

![enter image description here](https://drscdn.500px.org/photo/1021917306/m=900/v2?sig=2c4b4b9b6f9005ccb25a5794a89d97243f12ac6bc9fa22eb393a664c0e9c52fe)
