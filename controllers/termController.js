require('../models/database')
const Term = require('../models/term')


/** Getting all terms
* GET /
* homepage
* */
exports.getAllTerms = async (req, res) => {
	try {
		const terms = await Term.find({});
		res.render('main', {
			title: 'Глоссарий',
			terms
		})
	} catch (err) {
		res.status(500).json({ message: err.message || "Error Occured!" })
	}
}

/** Getting one term
* GET /:id
* Term
* */
exports.getTerm = async (req, res) => {
	try {
		let termId = req.params.id;
		const term = await Term.findById(termId);
		res.render('term', {
			title: 'Глоссарий',
			term
		})
	} catch (err) {
		res.status(500).json({ message: err.message || "Error Occured!" })
	}
}

/** Updating term
* POST /:id/update
* Term
* */
exports.updateTerm = async (req, res) => {
	try {
		const definition = req.body.definition;
		const name = req.body.name;
		let termId = req.params.id;
		Term.findByIdAndUpdate(termId, { definition: definition, name: name }, function (err, result) {
			if (err) {
				console.log(err)
			}
			else {
				console.log("Updated User : ", result);
			}
		});
		res.redirect('/' + termId)
	} catch (err) {
		res.status(500).json({ message: err.message || "Error Occured!" })
	};
};

/** Creating term
* POST /create
* Term
* */
exports.createTerm = async (req, res) => {
	try {
		const term = new Term({
			name: req.body.title,
			definition: req.body.definition
		})
		term.save(err => {
			if (err) return res.status(500).send(err);
			return res.redirect('/')
		});
	} catch (error) {
		res.status(500).json({ message: error.message || "Error Occured!" })
	}
}

/** Deleting term
* POST /:id/delete
* Term
* */
exports.deleteTerm = async (req, res) => {
	try {
		let termId = req.params.id;
		Term.findByIdAndDelete(termId, function (err, deletedTerm) {
			if (err) {
				console.log(err)
			}
			else {
				console.log("Deleted : ", deletedTerm);
			}
			return res.redirect('/')
		});
	} catch (error) {
		res.status(500).json({ message: error.message || "Error Occured!" })
	}
}

