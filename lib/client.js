import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'8m35gokq',
    dataset:'production',
    apiVersion:'2022-07-07',
    userCdn: true,
    token: process.env.next_public_sanity_token
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
