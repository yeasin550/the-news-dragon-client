import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
      <Container>
        <h2 className="text-center">Terms & Conditions</h2>
        <p>
          Here are a few examples of how this agreement can help you: If users
          abuse your website or mobile app in any way, you can terminate their
          account. Your "Termination" clause can inform users that their
          accounts would be terminated if they abuse your service. If users can
          post content on your website or mobile app (create content and share
          it on your platform), you can remove any content they created if it
          infringes copyright. Your Terms and Conditions will inform users that
          they can only create and/or share content they own rights to.
          Similarly, if users can register for an account and choose a username,
          you can inform users that they are not allowed to choose usernames
          that may infringe trademarks, i.e. usernames like Google, Facebook,
          and so on. If you sell products or services, you could cancel specific
          orders if a product price is incorrect. Your Terms and Conditions can
          include a clause to inform users that certain orders, at your sole
          discretion, can be canceled if the products ordered have incorrect
          prices due to various errors. And many more examples. In summary,
          while you do not legally need a Terms and Conditions agreement, there
          are many many reasons for you to have one. Not only will it make your
          business look more professional and trustworthy, but you'll also be
          maintaining more control over how your users are able to interact with
          your platforms and content.
        </p>
        <p>
          Go back to <Link to="/register">Register</Link>
        </p>
      </Container>
    );
};

export default Terms;