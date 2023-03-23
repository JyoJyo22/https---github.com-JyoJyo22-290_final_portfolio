import mongoose from 'mongoose';
import 'dotenv/config';


// Connect to MongoDB Atlas cluster
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

// this is a variable for connecting to the DB
const kanji_db = mongoose.connection;


// connect to the DB using your DB variable via .once()
// Confirm that the database has connected, print success to console
kanji_db.once("open", (error) => {
    if (error) {
        res.status(500).json( {Error: "Cannot connect to Kanji collection in MongoDB Atlas."} );
    } else {
    console.log("Successfully connected to the Kanji collection in MongoDB Atlas using Mongoose.");
    }
});


// Define the Collection's Schema.
const n3Schema = mongoose.Schema({
    kanji: { type: String, required: true, default: "ge-mu" },
	romaji: { type: String, required: true, default: "geemu" },
    hint: { type: String, required: true, default: "video game" },
	section: { type: Number, required: true, default: 3 },
	deadline: { type: Date, required: true, default: Date.now }
});


// define a Model variable for a Document
// this passes in a name (for the Collection) and the schema that the Documents in that Collection will follow
const n3 = mongoose.model("Kanji", n3Schema);


//   CREATE MODELS     ##########################################
// define a model to create a Document in your new Collection
const createKanjiDoc = async (kanji, romaji, hint, section, deadline) => {
    // create an instance of the n3 Model from above
    const n3Kanji = new n3({ 
        kanji: kanji,
        romaji: romaji,
        hint: hint,
        section: section,
        deadline: deadline
    });
    // call save to persist/save this obj as a Document in MongoDB
    console.log(n3Kanji);
    return n3Kanji.save();
}


//  RETRIEVE MODELS     #########################################
// define a model to retrieve Docs from the Collection via a filter
// Retrieve based on a filter and return a promise.
const getKanji = async () => {
    const query = n3.find();
    return query.exec();
}


// define a model to retrieve Docs from the Collection via ID 
// Retrieve based on the ID and return a promise.
const getKanjiById = async (_id) => {
    const query = n3.findById(_id);
    return query.exec();
}


//  UPDATE MODELS      ##############################################
// define a model to update a Doc
// replaceOne()   this can only replace an entire Doc
// updateOne()    this allows for updating fields within the Doc
const updateKanji = async (_id, kanji, romaji, hint, section, deadline) => {
    const result = await n3.replaceOne( 
        {_id: _id },
        { kanji: kanji, romaji: romaji, hint: hint, section: section, deadline: deadline }
        );
    return {
        _id: _id,
        kanji: kanji, 
        romaji: romaji, 
        hint: hint, 
        section: section, 
        deadline: deadline
    }
    // return result.modifiedCount;
};


//  DELETE MODELS       ##############################################
// define a model to delete a single Doc based on the ID
const deleteKanjiById = async (_id) => {
    const result = await n3.deleteOne( {_id: _id} );
    return result.deletedCount;
};

// define a model to delete many Docs based on a given filter
// const deleteKanjiByProp = async (filter) => {
//     const result = await n3.deleteMany(filter);
//     return result.deletedCount;
// }


// Export these Model variables for use in the Controller file
export { createKanjiDoc, getKanji, getKanjiById, updateKanji, deleteKanjiById }
