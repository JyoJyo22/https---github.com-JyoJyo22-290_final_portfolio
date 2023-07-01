import 'dotenv/config';
import express from 'express';
// import the export obj from model.mjs and name it kanjiModels
import * as kanjiModels from './model.mjs';

const PORT = process.env.PORT;
const app = express();
// REST controllers require JSON MIME type   (npm install rest)
app.use(express.json());


//  CREATE CONTROLLER     ######################################
// define a Create route
app.post('/create', (req, res) => {
    kanjiModels.createKanjiDoc(
        req.body.kanji,
        req.body.romaji, 
        req.body.hint,
        req.body.section
        )
        .then(new_kanji => {
            res.status(201).json(new_kanji);
            console.log(`CREATE:   A new Kanji was successfully added to JLPT section ${req.body.section}`);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json( { Error: "The new Kanji creation failed due to invalid user input."} );
        });
});


//  RETRIEVE CONTROLLERS     ######################################
// define a Retrieve route
app.get('/get/:jlpt', (req, res) => {
    kanjiModels.getKanji(req.params.jlpt)
        .then(retrieved_kanji => {
            if (retrieved_kanji !== null && retrieved_kanji !== undefined) {    
                console.log("here is response: ", retrieved_kanji);
                res.json(retrieved_kanji);
                console.log("RETRIEVE:  An existing Kanji was successfully retrieved.");
            } else {
                console.log("here is response: ", retrieved_kanji);
                res.status(404).json( { Error: "The Kanji was not found or was undefined"} );
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json( {Error: "The Kanji document retrieval failed due to invalid user input."} );
        });
});


// define a Retrieve by ID route
// app.get('/get/:_id/:jlpt', (req, res) => {
//     kanjiModels.getKanjiById(req.params._id, req.params.jlpt)
//     .then(retrieved_kanji => {
//             if (retrieved_kanji !== null) {    
//                 res.json(retrieved_kanji);
//                 console.log("RETRIEVE:  An existing Kanji document was successfully retrieved.");
//             } else {
//                 res.status(404).json( { Error: "The Kanji document was not found."} );
//             }
//         })
//         .catch(error => {
//             console.error(error);
//             res.status(400).json( {Error: "The Kanji document retrieval failed due to invalid user input."} );
//         });
// });


//  UPDATE CONTROLLER     ######################################
// define an Update route
app.put('/update/:_id', (req, res) => {
    kanjiModels.updateKanji(
        req.params._id,
        req.body.kanji,
        req.body.romaji, 
        req.body.hint,
        req.body.section
        )
        .then(update_kanji => {
            res.json(update_kanji);
            console.log("UPDATE:  An existing Kanji document was successfully updated.");
        })
        .catch(error => {
            console.error(error);
            res.status(400).json( {Error: "The Kanji document update failed due to invalid user input."} );
        });
});


//  DELETE CONTROLLER     ######################################
// define a Delete route
app.delete('/delete/:_id/:jlpt', (req, res) => {
    kanjiModels.deleteKanjiById(req.params._id, req.params.jlpt)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
                console.log("DELETE:  An existing Kanji document was successfully deleted.");
            } else {
                res.status(404).json( {Error: "The Kanji document was not found."});
            }
        })
        .catch(error => {
            console.error(error);
            res.send( {Error: "The Kanji document deletion by ID failed."});
        });
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

