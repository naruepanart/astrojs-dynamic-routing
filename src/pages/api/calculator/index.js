import conn from "../../../../lib/databaseConnect";
import CalculatorModel from "../../../../models/calculatorModel";

conn.databaseConnect();

export async function get() {
  try {
    const res = await CalculatorModel.find({})
      .sort({ _id: -1 })
      .limit(10)
      .lean();

    return new Response(JSON.stringify({ success: true, data: res }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error }), {
      status: 500,
    });
  }
}

export async function post({ request }) {
  const data = await request.json();

  try {
    const res = new CalculatorModel(data);
    await res.save();
    return new Response(JSON.stringify({ success: true }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error }), {
      status: 500,
    });
  }
}
