import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Home.scss';

const Home = () => {
  return (
    <Box className="home content">
      <Box className="home__splash-img">
        <Box className="home__hero-text">
          <Typography mb={2} variant="h2">
            YUGIOH REBORN
          </Typography>
          <Typography variant="body1">
            A format with the best of 2014 Yugioh with fixes, tweaks, and more!
          </Typography>
        </Box>
      </Box>
      <Box p={4} className="home__format-info">
        <Box className="home__format-info-content">
          <Typography variant="h2" mb={1}>
            Format Background
          </Typography>
          <Typography variant="h3">Motivation</Typography>
          <Typography variant="body2" mb={1}>
            Hey there! I&apos;m Taylor, the format&apos;s creator. As someone who&apos;s played a
            lot of Yugioh over the years, I&apos;ve seen some really good formats and some really
            bad ones. I wanted to make a format that captured the best parts of the most fun and
            interesting formats. And so, Yugioh Reborn had already begun creation in my mind.
          </Typography>
          <Typography variant="h3" mt={1}>
            Format Vision
          </Typography>
          <Typography variant="body2" mb={1}>
            The format&apos;s vision is to create the format that Konami never would because they
            always had to be pushing the latest set. Actually listening to the players and aiming to
            create a fun format, not just a profitable one. Here are the principles of the format:
            <ol>
              <li>
                Interaction leads to more interesting games. All decks should be encouraged to be
                playing <i>some</i> form of interaction.
              </li>
              <li>
                Following #1, monsters should be generally interactible in <i>some</i> form. Partial
                protection is preferred to full protection.
              </li>
              <li>A game with many shorter turns is preferred to a game with few long turns.</li>
              <li>
                Floodgates (cards that completely forbid an action) should be difficult to bring out
                and preferably easy to interact with.
              </li>
              <li>Many deck choices should be viable and on roughly equal ground.</li>
            </ol>
          </Typography>
          <Typography variant="h2" mt={3} mb={1}>
            Format Details
          </Typography>
          <Typography variant="h3">Legality</Typography>
          <Typography variant="body2" mb={1}>
            Anything printed in{' '}
            <a
              href="https://yugioh.fandom.com/wiki/Duelist_Alliance"
              target="_blank"
              rel="noreferrer"
            >
              Duelist Alliance
            </a>{' '}
            (released in TCG August 15, 2014) and prior is legal in the format. Additionally, any
            cards in the <Link to={'/addlist'}>Addition List</Link> is also legal in the format.
          </Typography>
          <Typography variant="h3">Forbidden & Limited List</Typography>
          <Typography variant="body2" mb={1}>
            The format follows a custom <Link to="/fllist">forbidden & limited list</Link> which is
            based on the{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://yugioh.fandom.com/wiki/October_2014_Lists_(TCG)"
            >
              October 2014 F&L list
            </a>
            . Changes to this banlist from the original 2014 list are highlighted. Changes to this
            list are made as necessary to ensure the format is always aligned with the format
            vision.
          </Typography>
          <Typography variant="h3" mt={1}>
            Rules
          </Typography>
          <Typography variant="body2" mb={1}>
            The format follows a variant of the Master Rules at the time,{' '}
            <a
              href="https://yugioh.fandom.com/wiki/Master_Rules#Master_Rules_3"
              target="_blank"
              rel="noreferrer"
            >
              Master Rules 3
            </a>
            . The only difference is that the Pendulum Zones now use the leftmost and rightmost
            Spell/Trap Card zones, just like in the latest Master Rules. This is done to bring
            Pendulums more in line with other mechanics in the format and to allow some pendulum
            decks to be added to the format more fairly.
          </Typography>
          <Typography variant="h3" mt={1}>
            How & Where to Play
          </Typography>
          <Typography variant="body2" mb={1}>
            Come join{' '}
            <a href="https://discord.gg/zstvAuzaQQ" target="_blank" rel="noreferrer">
              our Discord server
            </a>
            !
          </Typography>
          <Typography variant="body2" mb={1}>
            EDOPro is the current recommended platform to play on. This site&apos;s{' '}
            <Link to="/fllist">forbidden & limited list</Link> includes a download link for the
            format&apos;s banlist and addlist.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
