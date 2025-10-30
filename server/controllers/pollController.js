const Poll = require("../models/Poll");

// TODO
// ACTIVITY 2a - Implement getPolls function (return all polls)

const getPolls = async ( ) => {
    const poll = await Poll.find();
    console.log("Returning polls list");
    return poll;
}

module.exports = {getPolls}

// ACTIVITY 2b - Implement getPoll function (get one poll by id)

const getPoll = async (param) => {
    const { id } = param;
    const poll = await Poll.find({id : id});
    console.log('Fetching poll', param);
    return poll;
}

module.exports = {getPoll}

// END ACTIVITY 2

// TODO
// ACTIVITY 3a - Implement postPoll function to create a new poll

const postPoll = async({ ownerId, title, description, options }) => {
    if(!ownerId || !title || !options) return;

    const poll = new Poll({
        ownerId : ownerId,
        title: title,
        description: description,
        options: options,
    })

    await poll.save();
    return poll;
}

// ACTIVITY 3b - Implement postVote function to cast a vote

// ACTIVITY 3c - Implement module exports

// END ACTIVITY 3
