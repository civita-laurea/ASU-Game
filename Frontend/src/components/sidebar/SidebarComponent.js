import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            <MenuItem
                id={SLUGS.profile}
                title='Profile'
                icon={IconAgents}
                onClick={() => onClick(SLUGS.profile)}
            />
            <MenuItem
                id={SLUGS.ratingAndComments}
                title='Rating & Comments'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.ratingAndComments)}
            />
            <MenuItem
                id={SLUGS.courses}
                items={[SLUGS.coursesWork, SLUGS.coursesData]}
                title='Courses Overview'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.courses}
                    title='Courses'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.courses)}
                />
                <MenuItem
                    id={SLUGS.coursesWork}
                    title='Courses Assignments'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.coursesWork)}
                />
                <MenuItem
                    id={SLUGS.coursesData}
                    title='Courses Data'
                    level={2}
                    icon={IconOverview}
                    onClick={() => onClick(SLUGS.coursesData)}
                />
            </MenuItem>
            <MenuItem
                id={SLUGS.quizzes}
                title='Quiz Upload'
                icon={IconArticles}
                onClick={() => onClick(SLUGS.quizzes)}
            />
            <MenuItem
                id={SLUGS.community}
                title='Community'
                icon={IconArticles}
                onClick={() => onClick(SLUGS.community)}
            />
            <div className={classes.separator}></div>
            <MenuItem
                id={SLUGS.settings}
                title='Settings'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.settings)}
            />

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;
