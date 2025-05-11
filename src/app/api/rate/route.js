import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const revalidate = 10;

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('Review');

    const data = await collection.find({}).toArray();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, son, age, description, stars } = body;

    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('Review');

    const result = await collection.insertOne({ name, son, age, description, stars });

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error('Error inserting data into MongoDB:', error);
    return NextResponse.json({ error: 'Failed to insert data' }, { status: 500 });
  }
}

// DELETE handler
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('Review');

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'No document found with that ID' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting data from MongoDB:', error);
    return NextResponse.json({ error: 'Failed to delete data' }, { status: 500 });
  }
}
