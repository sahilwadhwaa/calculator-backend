import History from "../model/calculation.js"

export const saveCalculation= async (req, res) => {
    try{
        const {name, calculation, result}= req.body;
        const details= new History({
            name, calculation, result
        })

        await details.save();
        const history= await History.find();
        res.status(201).json(history);
    }catch (err) {
        res.status(409).json({ message: err.message });
    }
}

/* READ */
export const getCalculation = async (req, res) => {
    try {
      const history = await History.find();
      res.status(200).json(history);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };