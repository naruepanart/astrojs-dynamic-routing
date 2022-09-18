import CalculatorModel from "../../../../models/calculatorModel";

export async function get({ params }) {
  try {
    const res = await CalculatorModel.findOne({ id: params.id }).lean();

    return new Response(JSON.stringify({ success: true, data: res }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error }), {
      status: 500,
    });
  }
}

export async function patch({ request, params }) {
  const data = await request.json();
  try {
    await CalculatorModel.updateOne({ _id: params.id }, data, {
      new: true,
      runValidators: true,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error }), {
      status: 500,
    });
  }
}

export async function del({ params }) {
  try {
    await CalculatorModel.deleteOne({ _id: params.id });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error }), {
      status: 500,
    });
  }
}
